import Characters from "./components/Characters";
import Container from "@mui/material/Container";
export default function Home() {
	return (
		<Container maxWidth="lg">
			<h1 style={{ display: "flex", justifyContent: "center" }}>
				Rick and Morty Human Species
			</h1>
			<Characters />
		</Container>
	);
}
