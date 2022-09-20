import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";

import Header from "./Header";
import App from "./App"

let emojiList=[]
describe("Emoji Search Tests", () => {
  

  // Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.

  it("header components should be rendered", () => {
    render(<Header/>)
    const header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument;
  });

  /// Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
  it("Emojies list should be rendered", () => {
    render(<App/>)
    const items = screen.getAllByText(/Click to copy emoji/i);
    expect(items.length).toEqual(20);
  });

  // Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.
  it("Filtreleme yapılmalı", () => {
    render(<App/>)
    const inputText = screen.getByText("100");
    expect(inputText).toBeInTheDocument;
  });

  // Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.

  it("Emoji copy test",()=>{
    render(<App/>);
    const clicks = screen.getAllByTestId("item");
    expect(clicks[0]).toHaveAttribute;
  })
});

