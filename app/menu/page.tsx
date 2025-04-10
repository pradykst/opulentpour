import Navbar from "@/components/navbar"

export default function Menu() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-4 tracking-wider font-serif">OPULENT POUR</h1>
        <p className="text-center text-gray-700 italic mb-2">Where fine wines meet curated indulgence</p>
        <h2 className="text-2xl font-light text-center mb-12 tracking-wider font-serif">Tasting Menu</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Sparkling Bites</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Truffle Popcorn with Parmigiano</span>
              </li>
              <li className="flex justify-between">
                <span>Oysters with Mignonette & Yuzu Zest</span>
              </li>
              <li className="flex justify-between">
                <span>Caviar Blinis with Crème Fraîche</span>
              </li>
              <li className="flex justify-between">
                <span>Tempura Asparagus Spears</span>
              </li>
              <li className="flex justify-between">
                <span>Brie & Honey on Crostini</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Fresh & Zesty</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Goat Cheese & Herb Crostini</span>
              </li>
              <li className="flex justify-between">
                <span>Ceviche with Mango & Lime</span>
              </li>
              <li className="flex justify-between">
                <span>Thai Lemongrass Chicken Skewers</span>
              </li>
              <li className="flex justify-between">
                <span>Citrus-marinated Olives</span>
              </li>
              <li className="flex justify-between">
                <span>Marcona Almonds</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Rich & Refined</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Butter-poached Lobster Bites</span>
              </li>
              <li className="flex justify-between">
                <span>Aged Gruyère & Apple Slices</span>
              </li>
              <li className="flex justify-between">
                <span>Seared Scallops with Vanilla Beurre Blanc</span>
              </li>
              <li className="flex justify-between">
                <span>Roasted Cauliflower with Tahini</span>
              </li>
              <li className="flex justify-between">
                <span>Foie Gras on Brioche Toast</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Rosé Garden</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Prosciutto-wrapped Melon</span>
              </li>
              <li className="flex justify-between">
                <span>Beet Hummus with Pita Chips</span>
              </li>
              <li className="flex justify-between">
                <span>Feta & Watermelon Bites</span>
              </li>
              <li className="flex justify-between">
                <span>Tuna Tartare with Sesame Oil</span>
              </li>
              <li className="flex justify-between">
                <span>Rose-infused Macarons</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Savory Reds</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Duck Rillettes on Toast</span>
              </li>
              <li className="flex justify-between">
                <span>Mushroom Tartlets</span>
              </li>
              <li className="flex justify-between">
                <span>Charcuterie: Jamón Ibérico, Soppressata</span>
              </li>
              <li className="flex justify-between">
                <span>Smoked Salmon with Dill Cream</span>
              </li>
              <li className="flex justify-between">
                <span>Truffled Pecorino</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Hearty Indulgence</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Dry-aged Beef Sliders</span>
              </li>
              <li className="flex justify-between">
                <span>Aged Manchego & Blue Cheese</span>
              </li>
              <li className="flex justify-between">
                <span>Lamb Kofta with Mint Yogurt</span>
              </li>
              <li className="flex justify-between">
                <span>Dark Chocolate with Sea Salt</span>
              </li>
              <li className="flex justify-between">
                <span>Wild Boar Sausage</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium border-b border-amber-800 pb-2 mb-4 italic">Decadent Finish</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Stilton with Spiced Walnuts</span>
              </li>
              <li className="flex justify-between">
                <span>Crème Brûlée</span>
              </li>
              <li className="flex justify-between">
                <span>Fig & Honey Tart</span>
              </li>
              <li className="flex justify-between">
                <span>Chocolate Truffles</span>
              </li>
              <li className="flex justify-between">
                <span>Roquefort-stuffed Dates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">*Menu items subject to seasonal availability</p>
          <p className="text-gray-500 mt-2">Please inform our staff of any allergies or dietary restrictions</p>
        </div>
      </div>
    </main>
  )
}
