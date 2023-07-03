<details>
<summary>Step-2.-Week-1</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**

```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```

</br>

## **과제 설명**

✅**과제 1.**

- 필수 페이지 구성
  1. 메인 페이지
  2. 로그인 페이지
  3. 회원가입 페이지
  4. 개별 상품 상세 페이지
  5. 장바구니 페이지
  6. 결제 페이지
  7. 주문 결과 확인 페이지

</br>

- 디렉터리 구조

  ```
    kakao-shopping
    ├── node_modules
    ├── public
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── src
      ├─ components
      ├─ assets
      ├─ hooks
      ├─ pages
      ├─ apis
      ├─ utils
      ├─ contexts
      ├─ App.js
      └─ index.js
  ```

  디렉터리 구조는 같은 역할을 가지는 파일들끼리 묶는 형태로 만들었습니다.

  </br>

- 페이지 구성
  1. 메인 페이지
     - 핵심 기능: 상품 목록을 나열한다.
     - 기능 상세 설명
       - 상품 목록 데이터를 받아와 그리드 구조로 카테고리에 맞는 상품을 나열한다.
       - 개별 상품 상세 페이지로 이동할 수 있다.
     - 인터페이스 요구사항
       - 상품을 클릭하면 개별 상품 상세 페이지로 이동한다.
       - 상품에 마우스를 hover하면 이미지가 확대된다.

</br>

2. 로그인 페이지
   - 핵심 기능: 로그인 요청 및 사용자 로그인 정보를 저장한다.
   - 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 한다.
   - 인터페이스 요구사항
     - 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다.
     - 로그인 상태 유지 여부를 선택할 수 있다.

</br>

3. 회원가입 페이지
   - 핵심 기능: 사용자의 정보를 받아서 회원가입을 진행한다.
   - 기능 상세 설명
     - 이메일, 이름, 비밀번호를 입력받는다.
     - 비밀번호 확인란을 통해 비밀번호를 정확하게 입력했는지 확인한다.
   - 인터페이스 요구사항
     - 존재하는 이메일이나 이름을 입력하면 알림을 보낸다.
     - 비밀번호 입력란과 확인란의 값이 다르면 알림을 보낸다.( ex 비밀번호가 일치하지 않습니다.)

</br>

4. 개별 상품 상세 페이지
   - 핵심 기능: 상품의 상세 정보를 보여준다.
   - 기능 상세 설명
     - 옵션을 선택할 수 있다.
     - 장바구니 또는 구매하기로 넘어갈 수 있다.
   - 인터페이스 요구사항
     - 장바구니에 정상적으로 넣어지면 알림을 보낸다. 알림을 클릭하면 장바구니로 이동한다.
     - 이때 옵션을 선택하지 않고 다음 단계로 넘어가려고하면 옵션을 선택하라는 알림을 보낸다.

</br>

5. 장바구니 페이지
   - 핵심 기능: 장바구니에 들어있는 상품의 옵션과 수량을 보여준다.
   - 기능 상세 설명
     - 담긴 상품들의 수량을 조절 또는 삭제할 수 있다.
     - 주문 예상금액을 확인할 수 있다.
     - 결제 페이지로 넘어갈 수 있다.
   - 인터페이스 요구사항: 상품 수량 조절 시 주문 예상금액이 변경된다.

</br>

6. 결제 페이지
   - 핵심 기능: 주문상품 정보를 확인하고 결제를 할 수 있다.
   - 기능 상세 설명
     - 정보 제공에 대해 동의한 후 결제를 할 수 있다.
     - 결제 페이지에서는 수량 조절 및 삭제가 불가능하다.

</br>

7. 주문 결과 확인 페이지
   - 핵심 기능: 주문 상품의 정보와 결제 금액을 보여준다.
   - 기능 상세 설명: 주문 상품의 정보와 결제 금액을 보여주고, "쇼핑 계속하기" 버튼을 통해 메인 페이지로 이동이 가능하다.

</br>

✅**과제 2, 3**

- **토스트**
  ![toast](https://github.com/GangHub1970/Apple-ipad-app/assets/104193739/9166d688-91e5-4a12-a84b-519aeb6b4a9a)

  - 토스트 컴포넌트의 보임 여부를 `state`를 사용해서 관리
  - `setTimeout` 함수를 사용해서 Toast가 열린 뒤 3초가 지나면 자동으로 닫히게 구현
  - Toast가 사라지고 나타나는 것은 `position` 속성을 `absolute`로 지정한 다음, 기본적으로는 화면에서 보이지 않게 `-right-full`로 설정하고, Toast의 `state`가 `true`가 되면 원하는 위치(`right-4`)로 변경해주어 구현

</br>

- **브래드크럼**
  ![breadcrumb](https://github.com/GangHub1970/Apple-ipad-app/assets/104193739/c93d2106-bc6d-4bc5-a47d-c0ba87a560c4)

  - `useLocation` 훅을 이용해서 경로를 가져와 `state`에 리스트 형태로 경로를 나누어 구현
  - 경로를 누르면 되돌아가는 것은 `NavLink`를 사용해서 미리 입력해둔 각 주소로 이동할 수 있게 구현

</br>

- **라디오, 체크박스**
  <img width="1400" alt="스크린샷 2023-06-30 오후 10 02 36" src="https://github.com/GangHub1970/Apple-ipad-app/assets/104193739/ee1fc0fd-9cb9-4cf8-a608-862a56da2bd6">

  - 라디오와 체크박스는 선택된 것을 `state`로 관리
  - 라디오는 하나의 값만 가질 수 있으므로 `state`를 문자열로 관리
  - 체크박스는 중복값을 가질 수 있으므로 `state`를 배열로 관리

</br>

- **토글**

  <img width="506" alt="스크린샷 2023-06-29 오후 10 58 57" src="https://github.com/GangHub1970/Apple-ipad-app/assets/104193739/531bd3a9-e8b9-4b62-8779-76994b9516e2">

  <img width="515" alt="스크린샷 2023-06-29 오후 10 59 09" src="https://github.com/GangHub1970/Apple-ipad-app/assets/104193739/c43b58f6-db66-4b07-b8cd-416233d4166a">

  - 토글의 on, off 상태를 `state`로 관리

</br>

- **캐러셀**
  <img width="1400" alt="스크린샷 2023-06-30 오후 10 12 26" src="https://github.com/GangHub1970/Apple-ipad-app/assets/104193739/eae49934-a320-41ec-9ff2-52ae0ec836f6">
  - 시작과 끝 슬라이드를 양 끝에 추가해주고, 만약 마지막(시작) 슬라이드에 도착하면 `translation-duration` 없이 첫 번째(마지막) 슬라이드로 이동시켜주는 방법으로 무한히 이동할 수 있게 구현
  - 현재 보여지는 슬라이드와 양 끝지점에서 `translation-duration` 조절을 `state`로 관리

</br>

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제

</br>

## **과제명**

```
1. 코드 디자인 패턴과 상태 관리
```

</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용**

```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발**

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용**

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.

2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.

3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_2주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제

</br>

## **과제명**

```
1. 비동기 통신 활용과 레이아웃
```

</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요.
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_3주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**

```
상세 페이지 개발과 라이브러리
```

</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요.
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_4주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제

</br>

## **과제명**

```
주문 결제 개발
```

</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**

```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다.
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_5주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제

</br>

## **과제명**

```
프로젝트 마무리
```

</br>

## **과제 설명**

✅**과제 1. 배포**

```
- Netlify를 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3. README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.

2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.

3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_6주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>
