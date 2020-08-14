import React from 'react'

export default function List({ results }) {
    return (
        <tbody>
            {results.map( (book, i) => (
                <tr key={i}>
                    <th><img src={book.image} alt=""/></th>
                    <td>{book.title}</td>
                    <td>{book.authors[0]}</td>
                    <td>{book.description}</td>
                    <td><a href={book.link}>More Info</a></td>
                </tr>
            ))}
        </tbody>
    )
}
