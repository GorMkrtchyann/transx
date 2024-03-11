import {ClipLoader} from "react-spinners";


export const Loader = () => {

    return(
        <div className={'loader'}>
            <ClipLoader
                color={'#28a745'}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}