import Categories from '@/components/Categories';
import MainEventCategoryContainer from '@/components/MainEventCategoryContainer';
import MainSlideBanner from '@/components/MainSlideBanner';
import TodayDealsContainer from '@/components/TodayDealsContainer';

export default function Home() {
  return (
    <main>
      <MainSlideBanner />
      <MainEventCategoryContainer />
      <TodayDealsContainer />
      <Categories />
    </main>
  );
}
