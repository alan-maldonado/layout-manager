import Ad from './schemas/Ad'
import ArticleCards from './schemas/ArticleCards'
import ArticleContent from './schemas/ArticleContent'
import ArticleList from './schemas/ArticleList'
import ArticleListCategory from './schemas/ArticleListCategory'
import ArticleListPerson from './schemas/ArticleListPerson'
import ArticleListSection from './schemas/ArticleListSection'
import ArticleListShow from './schemas/ArticleListShow'
import BucketList from './schemas/BucketList'
import ContactForm from './schemas/ContactForm'
import FreeForm from './schemas/FreeForm'
import FullSpanPromo from './schemas/FullSpanPromo'
import HorizontalVideoGroup from './schemas/HorizontalVideoGroup'
import ImageGallery from './schemas/ImageGallery'
import MainVideo from './schemas/MainVideo'
import Merchandise from './schemas/Merchandise'
import PersonCard from './schemas/PersonCard'
import PersonalityEvent from './schemas/PersonalityEvent'
import PersonCollection from './schemas/PersonCollection'
import Poll from './schemas/Poll'
import PromoAbout from './schemas/PromoAbout'
import PromoChannel from './schemas/PromoChannel'
import PromoNewsletter from './schemas/PromoNewsletter'
import PromoWatchLive from './schemas/PromoWatchLive'
import RecirculationUnit from './schemas/RecirculationUnit'
import ScheduleList from './schemas/ScheduleList'
import SpecialFeature from './schemas/SpecialFeature'
import SpotlightArticles from './schemas/SpotlightArticles'
import ShowSubnav from './schemas/ShowSubnav'
import ShowTop from './schemas/ShowTop'
import Trending from './schemas/Trending'

export default {
  homeLayout: {
    main: [ Ad, ArticleCards, ArticleList, ArticleListSection, BucketList, ContactForm, FreeForm, FullSpanPromo,
      HorizontalVideoGroup, ImageGallery, MainVideo, Merchandise,
      PersonalityEvent, PersonCollection, Poll, PromoAbout, PromoChannel, PromoNewsletter,
      PromoWatchLive, RecirculationUnit, ScheduleList, SpecialFeature, SpotlightArticles, ShowSubnav, ShowTop, Trending],
    rightRail: [ Ad, ArticleCards, ArticleList, ArticleListSection, BucketList, ContactForm, FullSpanPromo,
      HorizontalVideoGroup, ImageGallery, MainVideo, Merchandise,
      PersonalityEvent, PersonCollection, Poll, PromoAbout, PromoChannel, PromoNewsletter,
      PromoWatchLive, RecirculationUnit, ScheduleList, SpecialFeature, SpotlightArticles, ShowSubnav, ShowTop, Trending]
  },
  articleLayout: {
    preContent: [ Ad ],
    main: [ ArticleContent ],
    rightRail: [ Ad, RecirculationUnit, Trending ]
  },
  categoryLayout: {
    main: [ ArticleListSection, ArticleCards, BucketList, SpotlightArticles ],
    rightRail: [ Ad, ArticleList, PromoNewsletter ]
  },
  tagLayout: {
    main: [ ArticleListCategory, ImageGallery ],
    rightRail: [ ArticleListCategory, ImageGallery, PromoNewsletter ]
  },
  showLayout: {
    preContent: [ ShowTop, ShowSubnav ],
    leftRail: [ Ad, ContactForm, Merchandise, PersonalityEvent, PersonCollection, PromoWatchLive, PromoAbout, SpecialFeature, Poll ],
    main: [ HorizontalVideoGroup, MainVideo, Merchandise, PersonalityEvent, PersonCollection, ArticleListShow, SpecialFeature ],
    rightRail: [ Ad, ContactForm, Merchandise, PersonalityEvent, PersonCollection, PromoWatchLive, PromoAbout, SpecialFeature, Poll ]
  },
  personLayout: {
    preContent: [ Ad, PersonCard ],
    main: [ ArticleListPerson, PersonCard ],
    rightRail: [ Ad, PromoAbout, ArticleListPerson ]
  }
}
