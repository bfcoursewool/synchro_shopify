import EventsBase from './events_base';
import ScrollMagic from 'scrollmagic';

export default class GoldCapBenefits extends EventsBase {

  constructor() {
    super()
    this._controller = new ScrollMagic.Controller()
    $(() => {
      let triggerElement = $('.pin-trigger')
      if (window.matchMedia("(min-width: 855px)").matches) {
        if (triggerElement.length == 0) {
          return
        }
        let scene = new ScrollMagic.Scene({
            triggerElement: '.pin-trigger',
            duration: 2000
          })
          .setPin('.pinned-section')
          .addTo(this._controller)
          .on('progress', (e) => {
            if (e.progress > 0 && e.progress <= .2) {
              // copy0 & no-icon active
              this.removeActives()
              this.removeVisited()
              $('.benefits-slider__copy0').addClass('active')
            } else if (e.progress > .2 && e.progress <= .4) {
              // copy1 & icon1 active
              this.removeActives()
              this.removeVisited()
              $('.benefits-slider__copy1').addClass('active')
              $('.benefits-slider__icon1').addClass('active')
            } else if (e.progress > .4 && e.progress <= .6) {
              // copy2 & icon2 active
              this.removeActives()
              this.removeVisited()
              $('.benefits-slider__copy2').addClass('active')
              $('.benefits-slider__icon1').addClass('visited')
              $('.benefits-slider__icon2').addClass('active')
            } else if (e.progress > .6 && e.progress <= .8) {
              // copy3 & icon3 active
              this.removeActives()
              this.removeVisited()
              $('.benefits-slider__copy3').addClass('active')
              $('.benefits-slider__icon1').addClass('visited')
              $('.benefits-slider__icon2').addClass('visited')
              $('.benefits-slider__icon3').addClass('active')
            } else if (e.progress > .8 && e.progress <= 1) {
              // copy 4 & icon4 active
              this.removeActives()
              this.removeVisited()
              $('.benefits-slider__copy4').addClass('active')
              $('.benefits-slider__icon1').addClass('visited')
              $('.benefits-slider__icon2').addClass('visited')
              $('.benefits-slider__icon3').addClass('visited')
              $('.benefits-slider__icon4').addClass('active')
            }
          })
      } else {
        /* The viewport is greater than 700 pixels wide */
      }
    })
  }

  events() {
    return {
      'click .scrollTo': 'scrollToAnchor'
    }
  }

  scrollToAnchor = (e) => {
    let classes = $(e).attr('class').split(/\s+/)
    let id = classes[0].split('__')[1]
    let scrollOffset
    if (id == 'icon1') {
      scrollOffset = '.benefits-slider__anchor1'
    } else if (id == 'icon2') {
      scrollOffset = '.benefits-slider__anchor2'
    } else if (id == 'icon3') {
      scrollOffset = '.benefits-slider__anchor3'
    } else if (id == 'icon4') {
      scrollOffset = '.benefits-slider__anchor4'
    }
    this._controller.scrollTo(scrollOffset)
  }

  mobileCheck() {
    let check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  removeActives() {
    $('.active').each((index, element) => {
      $(element).removeClass('active')
    })
  }
  removeVisited() {
    $('.visited').each((index, element) => {
      $(element).removeClass('visited')
    })
  }
}
