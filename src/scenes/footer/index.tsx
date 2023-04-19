import Logo from "@/assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Республика Беларусь, г. Минск, пр. Независимости, д. 72А, Лицензия М-7513 №02040/7513 выдана Министерством здравоохранения Республики Беларусь 24.04.2013 г.
          </p>
          <p>2023 © ООО "Центр здорового сна". УНП191896187.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Расположение</h4>
          <p className="my-5">Минск, пр. Независимости, 72а, 220012.</p>
          <p className="my-5">Станция метро Академия Наук</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Контакты</h4>
          <p className="my-5">info@centrsna.by</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
