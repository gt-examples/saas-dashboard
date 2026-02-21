import { T } from "gt-next";

export default function ExampleBanner() {
  return (
    <div className="bg-blue-600 text-white text-center text-xs py-2 px-4">
      <T>
        This is an example app built with{" "}
        <a
          href="https://generaltranslation.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          General Translation
        </a>
        . View the{" "}
        <a
          href="https://github.com/gt-examples/saas-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          source code on GitHub
        </a>
        .
      </T>
    </div>
  );
}
