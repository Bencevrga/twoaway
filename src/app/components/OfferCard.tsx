interface OfferCardProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  tags?: string[];
}

export default function OfferCard({
  title,
  subtitle,
  image,
  badge,
  tags = [],
}: OfferCardProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-900/80 shadow-[0_18px_50px_rgba(15,23,42,0.65)]">
      {/* Kép */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5" />
      </div>

      {/* Tartalom */}
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        {/* Badge */}
        <div className="flex items-start justify-between">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-amber-100/95 px-3 py-1 text-[11px] font-semibold text-amber-900 shadow-sm">
              {badge}
            </span>
          )}
        </div>

        <div className="mt-auto space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-white drop-shadow">
            {title}
          </h3>
          <p className="text-xs text-white/85">{subtitle}</p>

          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
