import people from "../assets/people.png";

export default function Title() {
    return (
        <div
            style={{
                height:"30rem",
                textAlign: "center",
                color: "#000080",
                fontSize: "1.5rem",
                backgroundImage: `url(${people})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat", 
                padding: "8rem 10rem 10rem 10rem",
                borderRadius: "10px",      
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
        >
            <h2 style={{ fontWeight: "900", marginBottom: "0.5rem",paddingTop:"1.75rem" }}>Art of Hustle</h2>
            <h4>Ecell - VCE</h4>
        </div>
    );
}
