interface MainProps {
    children: React.ReactNode;
}
function Main(props:MainProps) {
    return <main>
        {props.children}
    </main>
}

export default Main;
