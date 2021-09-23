import Head from "next/head";

const HeadInfo = ({
  title = "My Blog",
  keyword = "Blog powered by Next js",
  contents = "practice next js",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

export default HeadInfo;
