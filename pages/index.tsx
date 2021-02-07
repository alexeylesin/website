import { BlogPreview, Card, HeroText, Hr, LinkBlock, Responsive, Timeline } from "components";
import matter from "gray-matter";
import { FC } from "react";
import { FaFacebook, FaRegShareSquare, FaShare, FaStickyNote } from "react-icons/fa";
import { FiCheck, FiHexagon, FiPenTool, FiSettings, FiUploadCloud } from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { getAllPostsSlug, getSinglePostData } from "../lib/getBlogPosts";
import { BlogProps } from "./blog";

export const Index: FC<BlogProps> = ({ postData }) => {
  const TIMELINE_CURRENT = [
    {
      title: `2021`, items: [
        {
          headline: `Обновление сайта`,
          description: `Наконец, спустя долгое время, я решил обьединить блог и эту страницу. К сожалению, я не умею верстать сайты, поэтому за основу решил взять один из публичных репозиториев, найденных мной на безграничных просторах GitHub.`
        },
        {
          headline: `Открытие LesinSend и LesinPaste`,
          description: `Мне всегда хотелось создать собственный сервис для обмена текстом и файлами. И теперь, мне наконец удалось это сделать!`
        }
      ]
    },
    {
      title: `2020`,
      items: [
        {
          headline: `KingNetwork -&gt; RangeMC`,
          description: `У меня не было достаточно времени и денег на поддержку двух проектов сразу, поэтому старый пришлось закрыть. Все его игроки и некоторая часть персонала были переведены на RangeMC. Исходный код всех старых разработок проекта был выложен в открытый доступ на наш GitHub, где вы сможете с ними ознакомиться.`
        },
        {
          headline: `Знакомство с NodeJS`,
          description: `Сайт RangeMC был написан другим человеком на NodeJS, поэтому мне нужно было в нём разбираться. Именно так я и выучил основы данного языка, а чуть позже научился создавать с его помощью ботов для ВКонтакте и Telegram.`
        },
        {
          headline: `Открытие проекта RangeMC`,
          description: `Ранее, я создавал только сервера с выживанием или мини-играми. Теперь я решил попробовать что-то новое и создать ванильный сервер. Основная идеалогия проекта - открытость и безопасность. Все данные надёжно защищены, игрокам предоставлена возмонжность установки двухфакторной аутентификации и Email-адресов, а исходный код большинства разработок проекта находится на GitHub.`
        }
      ]
    }
  ];
  const TIMELINE_PAST = [
    {
      title: `2019`,
      items: [
        {
          headline: `Знакомство с GitHub`,
          description: `Изначально, я вообще не понимал как использовать данный сервис и для каких целей он создан. Однако, чуть позже изучил его, создал несколько репозиториев, а также разместил свои статичные сайты на GitHub Pages.`,
        },
        {
          headline: `Регистрация домена alexeylesin.ru`,
          description: `Я решил создать собственный веб-сайт для размещения ссылок на социальные сети и проекты. Изначально сайт выглядел <a style="color: #ffffff" href="https://old.alexeylesin.ru" target="_blank">вот так</a>, и этот дизайн я использовал вплоть до 2021 года. Также были и другие сервисы, но не все из них сохранились до этого момента.`
        }
      ]
    },
    {
      title: `2017`,
      items: [
        {
          headline: `AlexxxlCraft -&gt; KingNetwork`,
          description: `Мы решили начать сотрудничество с проектом KingNetwork, а вскоре решили обьединить оба проекта и начать совместную разработку новых сборок.`
        },
        {
          headline: `Создание сервера AlexxxlCraft`,
          description: `Я создал собственный сервер в Minecraft для игры с друзьями. Это дало мне очень большой опыт и в будущем позволило создать другие проекты.`
        }
      ]
    },
    {
      title: `2014`,
      items: [
        {
          headline: `Приход в Minecraft`,
          description: `Мне стала очень интересна тема создания серверов для майнкрафта, поэтому я начал в этом разбираться. Конечно, это было не слишком легко, однако я всегда старался узнать как можно больше. Названий созданных мной серверов я уже не вспомню, но их было около 5 штук и все они были на версиях от 1.5.2 до 1.7.10.`
        }
      ]
    }
  ];
  return (<> {/*= =============== INTRO ================ */}
        <h1>
          Привет, я Алексей Лесин
        </h1>
        <p>
          Добро пожаловать на обновлённую версию сайта. Здесь находится информация о моих проектах, биография,
          а также личный <a href="/blog">блог</a>. 
        </p>
        <Hr invisible mt={3} />
        
        {/*= =============== BLOG POSTS ================ */}
        <h2>Последние посты</h2>
        {postData
         ? postData.map(({ slug, frontMatter: { title, excerpt } }) => (
                <BlogPreview key={slug} slug={slug} title={title} excerpt={excerpt} />
            ))
         : null}
        <Hr invisible mt={2} />
        
        {/* TODO - ADD Skills Section */}
        
        {/*= =============== PROJECTS ================ */}
        <h2>Проекты</h2>
        <LinkBlock href="https://tools.alexeylesin.ru" target="_blank">
          <Card
              icon={<FiSettings />}
              title="LesinTools"
              description={
                <>
                  Сервис с полезными инструментами для Minecraft серверов. Защищён от DDoS-атак
                   и использует CDN для обеспечения максимально низкого пинга.
                </>
              }
              hover
          />
        </LinkBlock>
        <LinkBlock href="https://send.alexeylesin.ru" target="_blank">
          <Card
              icon={<FiUploadCloud />}
              title="LesinSend"
              description={
                <>
                  Сервис для быстрого обмена файлами размером до 1 гигабайта и сроком до 24 часов. Поддерживается
                  защита паролем и мгновенное удаление при скачивании.
                </>
              }
              hover
          />
        </LinkBlock>
        <LinkBlock href="https://bin.alexeylesin.ru" target="_blank">
          <Card
              icon={<FaRegShareSquare />}
              title="LesinPaste"
              hover
              description={
                <>
                  Сервис для быстрого обмена текстом, не использующий базу данных и не находящийся на сервере. Все
                  данные находятся прямо в самой ссылке! 
                </>
              }
          />
        </LinkBlock>
        {/* TODO: Add Project for Sudoku solver with simple presentation & hosting via Vercel */}
        {/* <LinkBlock href="https://github.com/FelixTellmann/use-color-theme" target="_blank">
 <Card icon={<HiOutlineColorSwatch />}
 title="use-color-theme"
 description={<>A custom React Hook to help you implement a "theming" classes for your application. The hook allows you to add as many color themes as you wish.</>}
 hover />
 </LinkBlock> */}
        <Hr invisible />
        
        {/*= =============== TIMELINE ================ */}
        <Timeline heading="Биография" preview={TIMELINE_CURRENT} data={[...TIMELINE_CURRENT, ...TIMELINE_PAST]} />
        <Hr invisible />
      </>
  );
};

export default Index;

export const getStaticProps = (): { props: { postData } } => {
  let count = 0;
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data
    };
  }).filter((item, index) => {
    if (count > 2) return false;
    if (!item?.frontMatter?.published) return false;
    count += 1;
    return true;
  });
  
  return { props: { postData } };
};
