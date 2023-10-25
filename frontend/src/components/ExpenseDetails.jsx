
import PropTypes from 'prop-types';

function ExpenseDetails({ expense }) {
    return (
        <div className="expense">
            <h2 className="title">Title: <span>{expense.title}</span></h2>
            <h3 className="spend">Spend: <span>{expense.spend}</span></h3>
            <h4 className="borrow">Borrow: <span>{expense.borrow}</span></h4>
        </div>
    );
}

ExpenseDetails.propTypes = {
    expense: PropTypes.oneOfType([
        PropTypes.object, // Allow a single object
        PropTypes.arrayOf(PropTypes.object), // Allow an array of objects
    ]).isRequired,
};

export default ExpenseDetails;
