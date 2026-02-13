import { useEffect } from "react";

export default function Partner() {
  useEffect(() => {
    // Redirect alla pagina partner di Sib
    window.location.href =
      "https://5aed6512.sibforms.com/serve/MUIFAEBbpZDOI0mql19gCaFciuvnqN0R6JaF_sbKM2VZ_GM3FOz75tbwfHVUZ-sCHP_RztEwadabbP0Naxhcf75O_4Kk5kALxNSZCT6ZLdLVDKdK5vUkpLoP4fRmO4QKmtLZif3ZGQ5wHNpCNnvPdgaF9MIefYsJQ8GC3hfZXdBXD8FzbU-0S9jMZGkSXY33nHy9tL2rIoQOdmuD";
  }, []);

  // Renderizza un elemento vuoto mentre avviene il redirect
  return null;
}
