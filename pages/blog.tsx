import { FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import matter from 'gray-matter';
import { BlogPreview, Box, HeroText, Input, IntroText, Text } from 'components';
import { getAllPostsSlug, getSinglePostData } from '../lib/getBlogPosts';

type PostData = {
  slug: string;
  frontMatter: {
    published?: boolean;
    title?: string;
    excerpt?: string;
    slug?: string;
  };
  matchCount?: number;
}[];

export type BlogProps = {
  postData: PostData;
};

export const Blog: FC<BlogProps> = ({ postData }) => {
  const [filteredPostData, setFilteredPostData] = useState(postData);

  const search = (event) => {
    if (event.currentTarget.value.replace(/\s/gi, '').length <= 2) {
      setFilteredPostData(postData);
      return;
    }
    const sanitize = (str: string) =>
      str
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/gi, ' ')
        .trim();

    const values = sanitize(event.currentTarget.value)
      .split(' ')
      .filter((i) => i.length > 2);
    const matcher = new RegExp(`(${values.join('|')})`, 'g');
    const wordCount = values.length;

    
    let totalMatchCount = 0;
    setFilteredPostData(
      postData
        .reduce((acc: PostData, item) => {
          acc.push({
            ...item,
            matchCount: matcher.exec(sanitize(item.frontMatter.title)) ? matcher.exec(sanitize(item.frontMatter.title)).length : 0
          });
          if (matcher.exec(sanitize(item.frontMatter.title))) {
            totalMatchCount =
              matcher.exec(sanitize(item.frontMatter.title)).length > totalMatchCount
                ? matcher.exec(sanitize(item.frontMatter.title)).length
                : totalMatchCount;
          }
          return acc;
        }, [])
        .filter(({ frontMatter: { title }, matchCount }) => {
          if ((matchCount / totalMatchCount < 0.3 && totalMatchCount > 3) || (totalMatchCount / wordCount < 0.75 && wordCount > 6)) return false;
          return matcher.exec(sanitize(title));
        })
        .sort((a, b) => {
          const x = matcher.exec(sanitize(a.frontMatter.title))?.length || 0;
          const y = matcher.exec(sanitize(b.frontMatter.title))?.length || 0;
          return y - x;
        })
    );
  };

  return (
    <>
      {/* <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={10}>
      Blog
    </Text> */}
      <h1>Мой блог</h1>
      <Text my={3}>
        В основном я пишу про Minecraft-сервера, хостинги и прочее. Воспользуйтесь строкой ниже для поиска среди опубликованных статей.
      </Text>
      <Box mb={5}>
        <Input placeholder="Поиск материалов" icon={<FiSearch />} onChange={search} />
      </Box>

      <h2>Последние посты</h2>
      {filteredPostData.map(({ slug, frontMatter: { title, excerpt } }) => (
        <BlogPreview key={slug} slug={slug} title={title} excerpt={excerpt} />
      ))}
    </>
  );
};

export default Blog;

export const getStaticProps = (): { props: { postData } } => {
  const postData = getAllPostsSlug()
    .map((slug) => {
      return {
        slug,
        frontMatter: matter(getSinglePostData(slug)).data
      };
    })
    .filter((item) => process.env.NODE_ENV === 'development' || item?.frontMatter?.published);

  return { props: { postData } };
};
