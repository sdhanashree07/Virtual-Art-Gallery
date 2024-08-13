import React, { useReducer } from 'react';

// Define the initial state and reducer for the form
const initialState = {
    artId: '',
    artName: '',
    description: '',
    loading: false,
    error: null,
    success: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_ART_ID':
            return { ...state, artId: action.payload };
        case 'SET_ART_NAME':
            return { ...state, artName: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        case 'SET_SUCCESS':
            return { ...state, success: action.payload, loading: false };
        default:
            return state;
    }
}

export default function AddArtCat() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handle form submission
    const submitHandle = (e) => {
        e.preventDefault(); // Prevent default form submission

        const sendData = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                acat_id: state.artId,
                acat_name: state.artName,
                description: state.description,
            })
        };

        // Log the sendData object to check the JSON
        console.log('Sending data:', sendData);

        dispatch({ type: 'SET_LOADING', payload: true });

        fetch('http://localhost:8080/category/addcategory', sendData)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(text || 'Network response was not ok.');
                    });
                }
                return response.json(); // Assuming the response is JSON
            })
            .then(data => {
                dispatch({ type: 'SET_SUCCESS', payload: true });
                dispatch({ type: 'SET_ART_ID', payload: '' });
                dispatch({ type: 'SET_ART_NAME', payload: '' });
                dispatch({ type: 'SET_DESCRIPTION', payload: '' });
                alert('Art Category added successfully!');
            })
            .catch(error => {
                console.error('There was an error adding the art category!', error);
                dispatch({ type: 'SET_ERROR', payload: error.message });
                alert('Failed to add art category.');
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    };

    return (
        <div className="container">
            <h1>Add Art Category</h1>
            <form onSubmit={submitHandle}>
                <div className="mb-3">
                    <label htmlFor="artId" className="form-label">Art Id:</label>
                    <input
                        type="text"
                        id="artId"
                        name="artId"
                        value={state.artId}
                        onChange={(e) => dispatch({ type: 'SET_ART_ID', payload: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="artName" className="form-label">Art Name:</label>
                    <input
                        type="text"
                        id="artName"
                        name="artName"
                        value={state.artName}
                        onChange={(e) => dispatch({ type: 'SET_ART_NAME', payload: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={state.description}
                        onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={state.loading}>
                    {state.loading ? 'Adding...' : 'Add Art Category'}
                </button>
                {state.error && <div className="alert alert-danger mt-3">{state.error}</div>}
                {state.success && <div className="alert alert-success mt-3">Art Category added successfully!</div>}
            </form>
        </div>
    );
}
