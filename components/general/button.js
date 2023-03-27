const Button = ({children, loading}) => {
    return (
        <button disabled={loading} className="flex_row mbw-jsty-ctr mbw10">
            {loading && (<div className="loading-circle"></div>)}
            <div className="mbw5 remove_margin">
                <p>
                {children}
                </p>
            </div>
        </button>
    );
}

export default Button;