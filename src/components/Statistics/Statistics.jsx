import css from "./Statistics.module.css";

const setBg = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
const colorStyle = () => { return ({ backgroundColor: setBg() })};

export const Statistics = ({ title=false, stats }) => {
    return (
        <section className={css.statistics}>
        
            {title && <h2 className={css.title}>{title}</h2>}
                
            <ul className={css.statList}>

                {stats.map(item =>
                    <li key={item.id} className={css.item} style={colorStyle()}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li>)
                }

            </ul>
        </section>)
}
  

 
