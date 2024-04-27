type Props = {
  src: string;
  caption?: string;
};
export default function Player({ src, caption }: Props) {
  return (
    <figure>
      <iframe
        className="skeleton"
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <caption>
        <p>{caption}</p>
      </caption>
    </figure>
  );
}
