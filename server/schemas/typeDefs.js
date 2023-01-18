const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Client {
    _id: ID
    name: String
    address: String
    town: String
  }

  type MealSum {
    _id: ID
    sumOfMeals: Int
  }

  type Menu {
    _id: ID
    month: String!
    plannedDate: String
    meal: [Meal]
  }

  type Order {
    _id: ID
    month: String
    plannedDate: String
    plannedDayOfYearNumber: Int
    plannedWeekOfYearNumber: Int
    plannedDayOfMonthNumber: Int
    plannedDayOfWeekNumber: Int
    plannedDayOfWeek: String
    quantity: Int
    orderText: String
    createdAt: String
    meals: [Meal]!
  }

  type Meal {
    _id: ID
    name: String
    vegetarian: Boolean
    servings: Int
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
    user(username: String!): User
    client(clientId: ID!): Client
    clients: [Client]

    orders: [Order]
    order(orderID: ID!): [Order]

    meal(mealId: ID!): Meal
    meals: [Meal]
    # mealsum: Int
    # meal(mealId: ID!): Meal
    menu(menuID: ID!): Menu
    menus: [Menu]
    
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClient(name: String!, address: String!, town: String!): Client
    updateClient(id: ID!, name: String!, address: String!, town: String!): Client
    addMenu(month: String!, plannedDate: String): Menu
    # addMenu(month: String!): Menu


    # addMeal(name: String!, type: String!): Meal  FUTURE
    
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
