import { storyblokEditable } from "@storyblok/react/rsc";

export const Hero = ({ blok }: { blok: any }) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-violet-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">{blok.headline}</h1>
        <p className="text-xl max-w-2xl mx-auto">{blok.content}</p>
      </div>
    </section>
  );
};