import s from './page.module.css'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={s.container}>
      <div className={s.item}>
          <h1 className={s.title}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={s.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eligendi fugiat nisi omnis, veniam vero?
          </p>
        <Button text={"See my works"} url={"/portfolio"}/>
      </div>
    </main>
  )
}
