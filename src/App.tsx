import { type FC, useRef, useState } from 'react';
import './App.css';

interface Post {
  id: number;
  title: string;
  category: string;
}

const categories = ['分類一', '分類二', '分類三', '分類四', '分類五'];

const selectRandomCategory = (): string => {
  return categories[Math.floor(Math.random() * categories.length)];
};

const generateRandomTitle = (length: number): string => {
  const characters =
    '驚蜃氣樓金香龍膽蝕璽曜燿螺旋階梯鱗滑稽古典籍瀾滄海鏡花生靈藥龍骨髓轟雷發電紫禁城碧落天際翡翠瑠璃琥珀境霊峰妖精瀑布幽谷明';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

const posts: Post[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: generateRandomTitle(Math.floor(Math.random() * 11) + 5),
  category: selectRandomCategory(),
}));

const App: FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const isComposingRef = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isComposingRef.current) return;

    const filtered = posts.filter(({ category }) =>
      category.includes(e.target.value),
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="p-4 grid gap-2 text-purple-900 bg-emerald-50 min-h-dvh content-start">
      <div className="grid gap-2 text-6xl">
        <label htmlFor="categories">Select or Type Category</label>
        <input
          type="text"
          onChange={handleChange}
          onCompositionStart={() => {
            isComposingRef.current = true;
          }}
          onCompositionEnd={(event: React.CompositionEvent) => {
            isComposingRef.current = false;
            handleChange(
              event as unknown as React.ChangeEvent<HTMLInputElement>,
            );
          }}
          list="post-list"
          id="categories"
          className="appearance-none outline-none ring-purple-100 focus-visible:ring-2 text-4xl  bg-transparent border-2 border-purple-800 p-2 [&::-webkit-calendar-picker-indicator]:!hidden"
        />
        <datalist id="post-list">
          {categories.map((category) => (
            <option key={category} value={category} />
          ))}
        </datalist>
      </div>
      <div>
        <ul className="grid gap-1 text-4xl">
          {filteredPosts.length !== 0 ? (
            filteredPosts.map(({ id, title, category }) => (
              <li key={id} className="flex gap-2 items-center">
                <span className="text-xl px-1 inline-block bg-purple-900 text-emerald-50 py-px">
                  {category}
                </span>
                <span>{title}</span>
              </li>
            ))
          ) : (
            <li className="text-5xl">
              No posts found
              <span className="animate-spin inline-block [animation-duration:3000ms]">
                🥹
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
