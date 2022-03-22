# SpearJin-Market

## :raised_hands: 프로젝트 소개
* 회원가입 후, 로그인을 하여야 서비스를 이용할 수 있습니다.
* 상품을 등록할 수 있습니다.
* 상품에 정보를 수정, 삭제 할 수 있습니다.
* 각 상품에 댓글을 추가, 수정, 삭제 할 수 있습니다.
* 장바구니 테그로 이동하면 등록한 상품을 수량에 따라 가격을 구할 수 있습니다.

## :clipboard: 기술스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/node-339933?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <li>axios</li>

## :paperclip: 배포 주소
배포 예정입니다

## :pencil2: 구현
  * 로그인, 회원가입
     * axios을 이용하여 server로 부터 "/user/signup", "/user/login"을 post하여 해당 데이터를 서버로 넘겨 주었습니다.
     * 서버로 넘어간 데이터를 error 처리를 하여 해당에 error가 생길시 로그인, 회원가입 페이지에 나타나도록 하였습니다.
     ![shopping-login](https://user-images.githubusercontent.com/87363129/159514474-1c037931-d210-422b-9d4a-46357e5d6e7c.gif)
  * 상품 추가
     * 상품추가 버튼을 클릭하고 해당 입력창에 정보를 입력하여 완료를 하면, "/product"로 axios을 post를 하여, 상품이 MongoDB에 담기도록 구현 하였습니다.
     ![shopping-product_add](https://user-images.githubusercontent.com/87363129/159514614-1c4cf078-fcfb-454f-a7f5-af1f58fbd617.gif)
  * 상품 수정, 삭제
     * 상품을 클릭하고 들어가면 수정 버튼을 누르면, 수정하는 컴포넌트가 나오도록 하였고, 완료를 하면 "/product/" axios에 put을 이용하여 수정이 되고, 취소를 누르면 수정이 안되도록 구현 하였습니다.
     * 삭제 버튼을 누르면 "/product/" axios에 delete을 이용하여 상품이 삭제 되도록 하였습니다.
     ![shopping-product_update_delete](https://user-images.githubusercontent.com/87363129/159514706-23204af6-4cc0-4344-bec1-35fdcd479a93.gif)
  * 댓글 추가, 수정, 삭제
     * 각 상품에 productId을 이용하여 상품별로 댓글을 구별 하였습니다.
     * "/comment" axios에 post을 이용하여 댓글을 생성 하였고, "/comment/${productId}/${index}"을 이용하여 해당 댓글의 index와 axios의 delete, put을 이용하여 수정, 삭제를 하도록 구현 하였습니다.
     ![shopping-comment_CRUD](https://user-images.githubusercontent.com/87363129/159514752-3f388ea5-b299-4649-9169-7d4cfba0d64f.gif)
  * 장바구니
     * 장바구니에 등록한 상품이 나오도록 구현 하였습니다.
     * '-'버튼을 누르면 상품 수량이 감소하고, '+'버튼을 누르면 상품 수량이 증가하도록 구현 하였습니다.
     * 총 가격에 모든 상품의 값을 forEach을 이용하여 상품을 모두 더한 값이 나오도록 구현 하였습니다.
     ![shopping-cart](https://user-images.githubusercontent.com/87363129/159514780-82ee3a07-e6f2-4bf7-82b6-4d6e09d0a776.gif)

