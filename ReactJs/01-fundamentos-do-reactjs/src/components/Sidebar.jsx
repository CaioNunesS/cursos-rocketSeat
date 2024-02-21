import styles from "./Sidebar.module.css";

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt=""
            />

            <div className={styles.profile}>
                <strong>Caio Nunes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )
}