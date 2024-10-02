import Header from "./Header"; // Importando o Header
import Footer from "./Footer";
import Card from "./Card";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/ZNf55oebGFetJ8rKEdoH1gPlUNo=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camisa-polo-adidas-originals-reta-3-stripes-cinza-6388-05689331-1-zoom.jpg",
            tam: "P, M, G, GG, EXG",
            price: "R$ 199,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/nrumwW6e5G1Qlb9otdzNx7CqXG8=/fit-in/430x623/static.dafiti.com.br/p/adidas-sportswear-camiseta-adidas-sportswear-reta-future-icon-rosa-7276-69375241-1-zoom.jpg?_gl=1*o56bzn*_gcl_aw*R0NMLjE3Mjc0ODE5NzEuQ2owS0NRandyOW0zQmhESEFSSXNBTnV0MDRhcUo4V1lwMkJlY3p0eG9LSGJpcmFjX0cxdGNEWm5wLU1CeVVtcUhYZFh5R1lMMzlKZkxFWWFBZ2JjRUFMd193Y0I.*_gcl_au*NTA0Njk4MzE3LjE3MjcyMTY5MjU.*_ga*NjAwMzU4NjU2LjE3MjcyMTY5MjY.*_ga_4X2HC5Z756*MTcyNzQ4MTk2MC41LjEuMTcyNzQ4MjE2Ny41OC4wLjA.",
            tam: "P, M, G, GG, EXG",
            price: "R$ 179,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/sB_SVZ191tlaQ9KOK9Y8tWWv5P8=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-reta-trefoil-3-stripes-azul-6767-21852341-2-zoom.jpg?_gl=1*1f52cj3*_gcl_aw*R0NMLjE3Mjc0ODE5NzEuQ2owS0NRandyOW0zQmhESEFSSXNBTnV0MDRhcUo4V1lwMkJlY3p0eG9LSGJpcmFjX0cxdGNEWm5wLU1CeVVtcUhYZFh5R1lMMzlKZkxFWWFBZ2JjRUFMd193Y0I.*_gcl_au*NTA0Njk4MzE3LjE3MjcyMTY5MjU.*_ga*NjAwMzU4NjU2LjE3MjcyMTY5MjY.*_ga_4X2HC5Z756*MTcyNzQ4MTk2MC41LjEuMTcyNzQ4Mjc3Ny42MC4wLjA.",
            tam: "P, M, G, GG, EXG",
            price: "R$ 149,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/WUkXim4emOfTuLKbrj0cYl_ko8A=/fit-in/215x312/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-reta-3-stripes-verde-8648-41106241-2-product.jpg",
            tam: "P, M, G, GG, EXG",
            price: "R$ 149,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/ZNf55oebGFetJ8rKEdoH1gPlUNo=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camisa-polo-adidas-originals-reta-3-stripes-cinza-6388-05689331-1-zoom.jpg",
            tam: "P, M, G, GG, EXG",
            price: "R$ 199,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/nrumwW6e5G1Qlb9otdzNx7CqXG8=/fit-in/430x623/static.dafiti.com.br/p/adidas-sportswear-camiseta-adidas-sportswear-reta-future-icon-rosa-7276-69375241-1-zoom.jpg?_gl=1*o56bzn*_gcl_aw*R0NMLjE3Mjc0ODE5NzEuQ2owS0NRandyOW0zQmhESEFSSXNBTnV0MDRhcUo4V1lwMkJlY3p0eG9LSGJpcmFjX0cxdGNEWm5wLU1CeVVtcUhYZFh5R1lMMzlKZkxFWWFBZ2JjRUFMd193Y0I.*_gcl_au*NTA0Njk4MzE3LjE3MjcyMTY5MjU.*_ga*NjAwMzU4NjU2LjE3MjcyMTY5MjY.*_ga_4X2HC5Z756*MTcyNzQ4MTk2MC41LjEuMTcyNzQ4MjE2Ny41OC4wLjA.",
            tam: "P, M, G, GG, EXG",
            price: "R$ 179,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/sB_SVZ191tlaQ9KOK9Y8tWWv5P8=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-reta-trefoil-3-stripes-azul-6767-21852341-2-zoom.jpg?_gl=1*1f52cj3*_gcl_aw*R0NMLjE3Mjc0ODE5NzEuQ2owS0NRandyOW0zQmhESEFSSXNBTnV0MDRhcUo4V1lwMkJlY3p0eG9LSGJpcmFjX0cxdGNEWm5wLU1CeVVtcUhYZFh5R1lMMzlKZkxFWWFBZ2JjRUFMd193Y0I.*_gcl_au*NTA0Njk4MzE3LjE3MjcyMTY5MjU.*_ga*NjAwMzU4NjU2LjE3MjcyMTY5MjY.*_ga_4X2HC5Z756*MTcyNzQ4MTk2MC41LjEuMTcyNzQ4Mjc3Ny42MC4wLjA.",
            tam: "P, M, G, GG, EXG",
            price: "R$ 149,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/WUkXim4emOfTuLKbrj0cYl_ko8A=/fit-in/215x312/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-reta-3-stripes-verde-8648-41106241-2-product.jpg",
            tam: "P, M, G, GG, EXG",
            price: "R$ 149,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/ZNf55oebGFetJ8rKEdoH1gPlUNo=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camisa-polo-adidas-originals-reta-3-stripes-cinza-6388-05689331-1-zoom.jpg",
            tam: "P, M, G, GG, EXG",
            price: "R$ 199,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/nrumwW6e5G1Qlb9otdzNx7CqXG8=/fit-in/430x623/static.dafiti.com.br/p/adidas-sportswear-camiseta-adidas-sportswear-reta-future-icon-rosa-7276-69375241-1-zoom.jpg?_gl=1*o56bzn*_gcl_aw*R0NMLjE3Mjc0ODE5NzEuQ2owS0NRandyOW0zQmhESEFSSXNBTnV0MDRhcUo4V1lwMkJlY3p0eG9LSGJpcmFjX0cxdGNEWm5wLU1CeVVtcUhYZFh5R1lMMzlKZkxFWWFBZ2JjRUFMd193Y0I.*_gcl_au*NTA0Njk4MzE3LjE3MjcyMTY5MjU.*_ga*NjAwMzU4NjU2LjE3MjcyMTY5MjY.*_ga_4X2HC5Z756*MTcyNzQ4MTk2MC41LjEuMTcyNzQ4MjE2Ny41OC4wLjA.",
            tam: "P, M, G, GG, EXG",
            price: "R$ 179,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/sB_SVZ191tlaQ9KOK9Y8tWWv5P8=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-reta-trefoil-3-stripes-azul-6767-21852341-2-zoom.jpg?_gl=1*1f52cj3*_gcl_aw*R0NMLjE3Mjc0ODE5NzEuQ2owS0NRandyOW0zQmhESEFSSXNBTnV0MDRhcUo4V1lwMkJlY3p0eG9LSGJpcmFjX0cxdGNEWm5wLU1CeVVtcUhYZFh5R1lMMzlKZkxFWWFBZ2JjRUFMd193Y0I.*_gcl_au*NTA0Njk4MzE3LjE3MjcyMTY5MjU.*_ga*NjAwMzU4NjU2LjE3MjcyMTY5MjY.*_ga_4X2HC5Z756*MTcyNzQ4MTk2MC41LjEuMTcyNzQ4Mjc3Ny42MC4wLjA.",
            tam: "P, M, G, GG, EXG",
            price: "R$ 149,99",
          }}
        />

        <Card
          infos={{
            title: "Camiseta Adidas",
            thumb:
              "https://t-static.dafiti.com.br/WUkXim4emOfTuLKbrj0cYl_ko8A=/fit-in/215x312/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-reta-3-stripes-verde-8648-41106241-2-product.jpg",
            tam: "P, M, G, GG, EXG",
            price: "R$ 149,99",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
