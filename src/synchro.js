import 'bootstrap';
import './scss/synchro.scss';
import LPEffects from './js/effects';
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

const lpEffectsObj = new LPEffects();
const fbPixelObj = new FaceBookPixel();
const gradientObj = new GradientEffect();
const svgObj = new SVGLoader();
const toggle = new Toggle();
const tabs = new Tabs();
const analyticsObj = new AnalyticsIntegration();
const goldCapBenefits = new GoldCapBenefits();
const slider = Slider('.slides');

$(document).ready(() => {
  gradientObj.startEffect();
})
