
import { redirect } from "next/navigation";

export default function NotFound() {
  

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you re looking for does not exist.</p>
    </div>
  );
}
