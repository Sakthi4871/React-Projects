import React from 'react'
import image1 from "../Images/Aloevera2.jpg"
import image2 from "../Images/basil_bg.jpg"
import './plants.css'

function Basil() {
  return (
    <>
      <h1 className='plant-header'>Basil</h1>
      <div className='aloevera-container'>
        <div className='aloevara-content1'> 
          <img src={image1} className='aloevera-img' />
        </div>
        <div className='aloevera-content2'>
          <div className='about-aloe'>
            <h3>About Basil</h3>
            <p>Basil leaves are very common in India and are found in almost every Indian household. It has been used for cooking and religious purposes. Many people worship basil leaves every morning. Basil is regional/local to India and has been grown in India for over 5000 years. Basil was brought to England from India in the 1500s and to the USA in the early 1600s. Basil leaves are best grown in countries with warm climates like India, Madagascar, Pakistan, Haiti, Indonesia, Thailand, France, Morocco, Egypt, and South Africa.  The scientific name of basil is Ocimum basilicum L., which belongs to the family Lamiaceae. Ocimum originates from the ancient Greek word Okimon, which means smell. In Hindi and Bengali, basil leaves are called Babui Tulsi1 Let us look at the health benefits of basil leaves. </p>             
            <h3>Benefits of Basil</h3>
            <ul>
              <li>Blood sugar regulation:</li>
              <p>Some studies suggest that adding basil to your diet may help reduce high blood sugar levels and help lessen long-term effects of high blood sugar. </p>
              <li>Heart disease prevention:</li>
              <p>The eugenol in basil can block calcium channels, which may help to lower blood pressure. Its essential oils can help lower your cholesterol and triglycerides. Basil also contains magnesium, which can help improve your blood flow by allowing your muscles and blood vessels to relax. </p>
              <li>Reduced inflammation:</li>
              <p>Essential oils in basil, including eugenol, linalool, and citronellol, help fight inflammation in your body. These anti-inflammatory properties help lower your risk of inflammatory conditions such as arthritis. heart disease, and bowel issues.  </p>
              <li>Protection against infections:</li>
              <p>The Aloe Vera Medium Plant features striking, fleshy leaves arranged in a rosette pattern. Its vibrant green color and unique structure make it an attractive addition to any room.</p>
            </ul>
            <h3>Care Tips for Basil</h3>
            <ol>
              <li>Pot and Soil:</li>
              <p>Basil likes rich, organic soils whether you're planting in the ground, a raised bed, or a container," says Myers. To improve your in-ground garden soil, she says to add compost rather than purchased topsoil, which often contains a lot of weed seed and could actually be worse than your existing soil. If you do buy soil, look for a blend of topsoil and compost.</p>
              <li>Watering:</li>
              <p>Make sure to water your basil plants regularly, since they can suffer in dry conditions. "Through the heat of the summer, I water my potted basil plants daily," says Arthur. "The leaves will 'flag' or droop, indicating they need a drink."</p>
              <li> Fertilization:</li>
              <p>Apply a slow-release organic fertilizer when planting your basil and then add a liquid feed of kelp meal once a month, Arthur suggests. "That will provide all the macro and micronutrients the basil needs to thrive," she says. "It is important to recognize that synthetic fertilizers (both time-release and water-soluble 'blue stuff') often have high rates of nitrogen, which causes the plants to flush soft new growth, attracting pests like aphids." To avoid this issue, opt for low rates (under 5) of organic fertilizer with nitrogen, phosphorous, and potassium (NPK) ratios.</p>
              <li>Pruning:</li>
              <p>When tiny flowers begin to grow on your basil plants, or your plants reach more than 6 inches in height, it's time to start pruning. Just remove the flowers and leave the stems alone</p>
              <li> Propagation:</li>
              <p>It is possible to plant a cutting into wet soil, but Schoenberg likes to take a cutting and place it into a glass of water.Here is Schoenberg's best method for propagating basil:Keep the glass in a sunny spot and wait for roots to develop in the glass.Once the roots are at least 1 inch in length, the cutting is ready to transplant into soil.Keep the soil moist (not waterlogged) for about a week, then slowly reduce the water.</p>
            </ol>
          </div>
        </div>
        <div className='bg'>
          <div className='bg-img'>
            <img src={image2} />
          </div>
          <div className='bg-content'>
            <p>For more information <a href='https://en.wikipedia.org/wiki/Basil'>Click here</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basil