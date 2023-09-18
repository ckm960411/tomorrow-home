export interface EventCategory {
  title: string;
  image_url: string;
}
export const getEventCategories = async () => {
  const result: EventCategory[] = await fetch(
    'http://localhost:3000/api/event-categories'
  )
    .then((res) => res.json())
    .catch(console.error);

  return result;
};
