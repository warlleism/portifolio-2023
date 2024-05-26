
import BarLoader from "react-spinners/BarLoader";

const Spinner = ({ value }) => {

    return (
        <BarLoader
            color={'#4D0188'}
            loading={value}
            size={130}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner;