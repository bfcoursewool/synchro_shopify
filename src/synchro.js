import 'bootstrap';
import './scss/synchro.scss';
import LPEffects from './js/effects';
import FaceBookPixel from './js/analytics/facebook_pixel';
import AnalyticsIntegration from './js/AnalyticsIntegration';
import Tabs from './js/tabs';
import Slider from './js/slider';
import GoldCapBenefits from './js/goldCapBenefits';
import FloatingPurchaseOptions from './js/floatingPurchaseOptions';
import Experiments from './js/experiments';

const lpEffectsObj = new LPEffects();
const fbPixelObj = new FaceBookPixel();
const tabs = new Tabs();
const analyticsObj = new AnalyticsIntegration();
const goldCapBenefits = new GoldCapBenefits();
const slider = Slider('.slides');
