import LPEffects from './js/effects';
//import BuyButton from './js/ShopifyBuyButton/buy_button';
import FaceBookPixel from './js/analytics/facebook_pixel';
import Kissmetrics from './js/analytics/kissmetrics';
import AnalyticsIntegration from './js/AnalyticsIntegration';
import GradientEffect from './js/gradient_effect';
import SVGLoader from './js/svg_loader';
import Toggle from './js/toggle';
import Tabs from './js/tabs';
import Slider from './js/slider';
import GoldCapBenefits from './js/goldCapBenefits';
import FloatingPurchaseOptions from './js/floatingPurchaseOptions';
import Experiments from './js/experiments';
import { loadHeroImg } from './js/hero_image';
// import susanEffects from './js/susan/effects'; "Disabling this for now so we can see if anything stops working... should be redudant."

console.log(`release_tag: ${process.env.RELEASE_TAG}`)

const lpEffectsObj = new LPEffects();
const fbPixelObj = new FaceBookPixel();
const gradientObj = new GradientEffect();
const svgObj = new SVGLoader();
const toggle = new Toggle();
const tabs = new Tabs();
const analyticsObj = new AnalyticsIntegration();
const goldCapBenefits = new GoldCapBenefits();
const slider = Slider('.slides');

//susanEffects();

$(document).ready(() => {
  gradientObj.startEffect();
})
