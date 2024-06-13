import preview from './assets/images//image-omelette.jpeg';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='xl:w-1/2 xl:mt-12  xl:mb-10 xl:rounded-xl bg-White p-10 sm:w-full sm:mt-0 sm:mb-0 sm:p-0'>
      <section className='pb-6'>
        <img src={preview} alt="omelette" className='xl:rounded-xl xl:w-11/12 xl:m-auto xl:mt-6 sm:rounded-none'/>
        <h1 className='text-4xl pt-6 pb-6 sm:p-6'>Simple Omelette Recipe</h1>
        <p className='text-m text-justify pb-6 text-Wenge-Brown sm:pl-6 sm:pr-6'>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className=' bg-Rose-White p-6 rounded-lg sm:ml-6 sm:mr-6'>
          <h3 className='text-lg font-bold text-Dark-Raspberry font-outfil'>Preparation time</h3>
          <ul className='text-sm list-disc pl-6 leading-7 pt-2 text-Wenge-Brown'>
            <li className='pl-3'>
              <b>Total</b>: Approximately 10 minutes
            </li>
            <li className='pl-3'>
              <b>Preparation</b>: 5 minutes
            </li>
            <li className='pl-3'>
              <b>Cooking</b>: 5 minutes
            </li>
          </ul>
        </div>
        <h2 className='text-2xl text-Nutmeg pt-5 sm:pl-6'>Ingredients</h2>
          <ul className='text-sm list-disc pl-6 leading-7 pt-2 text-Wenge-Brown sm:pl-12 sm:pr-6'>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'>2-3 large eggs</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'>Salt, to taste</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'>Pepper, to taste</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'>1 tablespoon of butter or oil</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
      </section>
        <hr className=' border-Light-Grey sm:w-11/12 sm:m-auto'/>
      <section className='pt-6 pb-6 sm:pl-6 sm:pr-6'>
        <h2 className='text-2xl text-Nutmeg'>Instructions</h2>
        <ol className='text-sm list-decimal pl-5 leading-7 pt-2 text-Wenge-Brown'>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'> <span className='font-bold'>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
              You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'><b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'><b>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
              the eggs evenly coat the surface.</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'><b>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightly runny in the 
              middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'><b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge and fold it over the 
              fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li className='pl-3 marker:font-bold marker:text-Nutmeg'><b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.</li>
        </ol>
        </section>
        <hr className=' border-Light-Grey sm:w-11/12 sm:m-auto'/>
      <section className=' pt-6 pb-4 sm:pl-6 sm:pr-6'>
        <h2 className='text-2xl text-Nutmeg'>Nutrition</h2>
        <p className='text-sm pt-5 pb-5 text-Wenge-Brown'>The table below shows nutritional values per serving without the additional fillings.</p>
          <table className='table-auto w-full border-spacing-5 text-Wenge-Brown'>
            <tbody className='border-spacing-5'>
              <tr className='border-b border-b-Light-Grey'>
                <td className='pl-6 px-4 py-2'>Calories</td>
                <td className=' font-bold text-Nutmeg'>277kcal</td>
              </tr>
              <tr className=' border-b border-b-Light-Grey '>
                <td className='pl-6 px-4 py-2'>Carbs</td>
                <td className=' font-bold text-Nutmeg'>0g</td>
              </tr>
              <tr className=' border-b border-b-Light-Grey'>
                <td className='pl-6 px-4 py-2'>Protein</td>
                <td className=' font-bold text-Nutmeg'>20g</td>
              </tr>
              <tr >
                <td className='pl-6 px-4 py-2'>Fat</td>
                <td className=' font-bold text-Nutmeg'>22g</td>
              </tr>
            </tbody>
          </table>
      </section>
      </div>
      </div>
  );
}

export default App;
