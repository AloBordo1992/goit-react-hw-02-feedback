export const Feedbackoption = ({ options, updateState }) => {
  return (
    <>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" onClick={() => updateState(option)}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
