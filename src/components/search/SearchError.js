import React from 'react'

const SearchError = (props) => {
    return (
        <div>
            <h3>Something went wrong!</h3>
            <p>
                {props.error.status ? props.error.status + ' - ' : null}
                {props.error.data.message}
            </p>
        </div>
    )
}
export default SearchError