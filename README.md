# 🚀 My Custom React Router

A lightweight, customizable React Router built from scratch using React and browser's History API.  
It includes essential features like:

- Routing via `<Routes>` and `<Route>`
- Programmatic navigation via `useNavigate`
- URL state and pathname via `useLocation`
- Dynamic params via `useParams`
- Active link styling via `<MyLink>`
- 404 fallback using `path="*"`

---

## 📁 File Structure

```
src/
├──react-router/
  ├── MyBrowserRouter.jsx   # Context + state management
  ├── Router.jsx          # Route matcher and renderer
  ├── Routes.jsx          # Wrapper for Route components
  ├── Route.jsx           # Represents a single route
  ├── MyLink.jsx            # MyLink with active styling
  ├── useNavigate.js      # Programmatic routing
  ├── useLocation.js      # Path and state info
  ├── useParams.js        # Extracts dynamic route params
```

---

## 🧱 Components & Hooks

### 🔃 `MyBrowserRouter`

Initializes routing context and listens for URL changes (`popstate` event).

```jsx
import { MyBrowserRouter } from "./MyBrowserRouter";

<MyBrowserRouter>
  <App />
</MyBrowserRouter>;
```

---

### 🔁 `Routes` & `Route`

Define the MyRouter your app can handle.

```jsx
import Routes from "./Routes";
import Route from "./Route";

<MyRouter>
  <MyRoutes path="/" element={<Home />} />
  <MyRoutes path="/about" element={<About />} />
  <MyRoutes path="/user/:id" element={<User />} />
  <MyRoutes path="*" element={<NotFound />} />
</MyRouter>;
```

---

### 🔗 `MyLink` (with Active Styling)

Use `<MyLink>` to navigate between pages without full page reload. Supports active style via function.

```jsx
import MyLink from "./MyLink";

<MyLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  })}
>
  About
</MyLink>;
```

---

## 🔧 Navigation & State

### 🧭 `useNavigate()`

Navigate programmatically.

```jsx
const navigate = useNavigate();

// Push new route
navigate("/dashboard");

// Replace current route
navigate("/login", { replace: true });

// Navigate with state
navigate("/profile", { state: { from: "settings" } });
```

Under the hood, it uses:

```js
window.history.pushState(state, "", route);
```

or

```js
window.history.replaceState(state, "", route);
```

---

### 📍 `useLocation()`

Access the current pathname and state.

```jsx
const location = useLocation();

console.log(location.pathname); // e.g. "/about"
console.log(location.state); // e.g. { from: 'login' }
```

---

### 📦 `useParams()`

Reads URL parameters from dynamic MyRouter like `/user/:id`.

```jsx
const params = useParams();

console.log(params.id); // If route = /user/42 → 42
```

---

## 🧪 Example Usage

```jsx
import {
  MyBrowserRouter,
  MyRouter,
  MyRoutes,
  MyLink,
  useParams,
  useNavigate,
  useLocation,
} from "./your-router";

function App() {
  return (
    <MyBrowserRouter>
      <nav>
        <MyLink to="/">Home</MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/user/42">User</MyLink>
      </nav>

      <MyRouter>
        <MyRoutes path="/" element={<Home />} />
        <MyRoutes path="/about" element={<About />} />
        <MyRoutes path="/user/:id" element={<User />} />
        <MyRoutes path="*" element={<NotFound />} />
      </MyRouter>
    </MyBrowserRouter>
  );
}

function User() {
  const params = useParams();
  return <h2>User ID: {params.id}</h2>;
}
```

---

## 🧠 How Matching Works

- Exact Match: `path="/"` matches `/`
- Dynamic Route: `path="/user/:id"` matches `/user/42`
- Fallback: `path="*"` catches all unmatched paths

---

## ✅ Why Build Your Own?

- Learn how routers work internally
- Fully control the routing behavior
- Lightweight (no external dependencies)
- Great for small apps or educational projects

---

## 🧰 Coming Soon

- [ ] Query parameter support
- [ ] Route guards
- [ ] Lazy loading
- [ ] Nested MyRouter

---

## 🪪 License

MIT License — Free to use, modify, and contribute!

---

## 🙌 Contributions Welcome

Feel free to open PRs or suggest improvements!
