import HText from "@/shared/HText";

const Place = () => {
    return (
        <section id="place" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="z-10 mt-32 md:basis-3/5">
                    <HText>Мы на карте</HText>
                    <p className="py-5">Медицинский центр расположен в центре города возле метро, рядом есть остановки и места для парковки.</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.581523023398!2d27.59932727659303!3d53.92141187246167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc95a6fd3f5f3%3A0x7d6c17865489f99e!2z0KbQtdC90YLRgCDQt9C00L7RgNC-0LLQvtCz0L4g0YHQvdCw!5e0!3m2!1sru!2sby!4v1681985438933!5m2!1sru!2sby"
                        width="1200" height="400" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Place;