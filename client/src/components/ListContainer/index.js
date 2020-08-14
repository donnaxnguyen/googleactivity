import React from 'react'
import ListItems from '../List'


export default function index({ results }) {
    return (
        <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Description</th>
            <th scope="col"> Link</th>
          </tr>
        </thead>
        <ListItems results={results}/>
      </table>
    )
}
