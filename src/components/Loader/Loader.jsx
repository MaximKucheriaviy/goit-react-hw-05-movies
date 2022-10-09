import { ThreeDots  } from "react-loader-spinner";
import { createPortal } from "react-dom";

const modalPortal = document.querySelector('#loader');

export const Loader = props => {
    return (createPortal(
    <div className="Overlay">
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#ff5100" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>, modalPortal)
    )
}