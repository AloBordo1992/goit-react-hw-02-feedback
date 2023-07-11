export const Feedbackoption = updateState => {
  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => updateState}>
            good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateState}>
            neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateState}>
            bad
          </button>
        </li>
      </ul>
    </>
  );
};
