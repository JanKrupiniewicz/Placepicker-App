export default function ConfirmDelete({submitAction, cancleAction}) {
    return (
        <div>
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div>
                <button onClick={cancleAction}>No</button>
                <button onClick={submitAction}>Yes</button>
            </div>
        </div>
    );
}