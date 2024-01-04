import { styles } from "../styles";

const SectionWrapper = (Component, idName) =>{
    return function HOC(){
        return (
            <section
                className={`${styles.padding} mx-auto max-w-7xl relative z-0`}
            >
                <Component />
            </section>
        )
    }
}

export default SectionWrapper