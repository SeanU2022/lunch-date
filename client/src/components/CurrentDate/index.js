import React from "react";

export default function CurrentDate() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div className="CurrentDate">
            <h1>{date}</h1>
        </div>
    );
}