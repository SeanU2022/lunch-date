const { AuthenticationError } = require('apollo-server-express');
const { User, Client, Meal, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    clients: async () => {
      return Client.find().sort({ createdAt: -1 });
    },
    client: async (parent, { clientId }) => {
      return Client.findOne({ _id: clientId });
    },

    meals: async () => {
      return Meal.find().sort({ createdAt: -1 });
    },

    // meal: async (parent, { mealId }) => {
    //   return Meal.findOne({ _id: clientId });
    // },

    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // User
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // Client
    addClient: async (parent, { name, address, town }, context) => {
      console.log(context.user)
      if (context.user) {
        const client = await Client.create({
          name,
          address,
          town
        });
        console.log('add client')
        console.log(name)
        console.log(address)
        console.log(town)
        return client;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // updateClient: async (parent, { name, address, town }, context) => {
    //   console.log(context.user)
    //   if (context.user) {
    //     const client = await Client.create({
    //       name,
    //       address,
    //       town
    //     });
    //     console.log('add client')
    //     console.log(name)
    //     console.log(address)
    //     console.log(town)
    //     return client;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // tuesday
    updateClient: async (parent, { id, name, address, town }, context) => {
      // Find and update the matching class using the destructured args
      console.log(context.user)
      if (context.user) {
        const client = await Client.findOneAndUpdate(
          { _id: id }, 
          { name ,
           address ,
           town },
          // Return the newly updated object instead of the original
          { new: true }
        );
        return client;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
