import React from 'react';

const artists = [
    { id: 1, name: 'Artist One', genre: 'Rock', albums: 5 },
    { id: 2, name: 'Artist Two', genre: 'Pop', albums: 3 },
    { id: 3, name: 'Artist Three', genre: 'Jazz', albums: 7 },
];

const ArtistList = () => {
    // Handle edit action
    const handleEdit = (id) => {
        alert(`Edit artist with ID: ${id}`);
        // Implement edit functionality here
    };

    // Handle delete action
    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete artist with ID: ${id}?`)) {
            alert(`Deleted artist with ID: ${id}`);
            // Implement delete functionality here
        }
    };

    return (
        <div>
            <h2>Artist List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Albums</th>
                        {/* No "Actions" header */}
                    </tr>
                </thead>
                <tbody>
                    {artists.map((artist) => (
                        <tr key={artist.id}>
                            <td>{artist.id}</td>
                            <td>{artist.name}</td>
                            <td>{artist.genre}</td>
                            <td>{artist.albums}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEdit(artist.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(artist.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArtistList;
