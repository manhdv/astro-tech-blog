import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'lakl.net',
    description: 'Nhật ký đầu tư cá nhân',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}