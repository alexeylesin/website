import { FC } from 'react';
import { HeroText, Link } from 'components';
import { NextSeo } from "next-seo";

export const Index: FC = () => {
  return (
    <>
      <NextSeo title="Обо мне - Алексей Лесин" openGraph={{ title: 'Обо мне - Алексей Лесин' }} />
      <h1>Немного о себе</h1>
      <article>
        <p>
          Я занимаюсь созданием Minecraft серверов и сборок для них. К сожалению, на сборки у меня сейчас
          очень мало времени, поэтому основную его часть я уделяю разработке проекта RangeMC. Это полностью
          открытый и безопасный ванильный проект, сделанный ради игроков, а не для заработка денег на них.
        </p>
        <p>
          В свободное время делаю различные сервисы, исходный код которых в большинстве случаев
          тоже публикую на GitHub в открытый доступ. Также, иногда занимаюсь переводами плагинов
          или сайтов, чтобы сделать их доступными для русскоязычной аудитории.
        </p>
        <h2 className="h3">Поддержать меня</h2>
        <p>
          Если вы хотите материально меня поддержать, можете сделать это на <a style={{color: '#ffffff'}} href="https://donate.alexeylesin.ru/" target="_blank">данной</a> странице.
          Также, вы можете воспользоваться одной из моих партнёрских ссылок при регистрации на данных сайтах - <a style={{color: '#ffffff'}} href="https://billing.pebblehost.com/aff.php?aff=1396" target="_blank">PebbleHost</a>, <a style={{color: '#ffffff'}} href="https://minehosting.ru/?utm_source=ref&utm_content=848218" target="_blank">MineHosting</a> и <a style={{color: '#ffffff'}} href="" target="_blank">DigitalOcean</a>.
        </p>
      </article>
    </>
  );
};

export default Index;
