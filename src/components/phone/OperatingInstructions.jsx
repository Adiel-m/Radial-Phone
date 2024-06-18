export default function OperatingInstructions() {
  const handleclick = (e) => {
    const el = e.target.parentElement
    el.style.insetInlineEnd = '-100%'
  }

  return (
    <article className="info">
      <header>
        <h2>Operating Instructions</h2>
        <p>
          Quickly call emergency or frequently dialed numbers with a simple one or two
          digit code. Establish a short list of up to eight numbers, or a longer list of
          up to 30 numbers.
        </p>
      </header>
      <div className="info--details">
        <details>
          <summary>
            <h3>Speed Calling 8 list</h3>
          </summary>
          <ul>
            <li>
              <h4>Add Speed Calling number</h4>
              <p>
                To program your Speed Calling 8 list, dial *74. then dial the one-digit
                number (2 through 9) you would like to use to dial a frequently called
                number. Then, dial the entire number you wish to designate for that code,
                followed by #.
                <br />
                <span className="fs-xxsm fw-500">
                  Remember to dial 1 and the area code for -distance numbers.
                </span>
                <br />
                <br />
                For example, to designate Speed Dial 4 as your friend's number
                555-123-4567 (which is a long-distance call for you), simply dial
                *74-4-1-555-123-4567-#.If the call is local, you would dial
                *74-4-123-4567-#. repeat the procedure for each number you wish to add.
                <br />
                repeat the procedure for each number you wish to add.
              </p>
            </li>
            <li>
              <h4>Use Speed calling number</h4>
              <p>
                To use your speed dialing feature, dial the one-digit code, followed by #.
                Your call will be dialed automatically.
              </p>
            </li>
            <li>
              <h4>Delete Speed calling number</h4>
              <ul>
                <li>
                  <h5>Delete using dial</h5>
                  <p>
                    To delete your speed dialing feature, dial the two-digit code,then
                    dial the one-digit number (2 through 9) you would like to use followed
                    by #.
                    <br />
                    For example, to designate Speed Dial 4, simply dial *75-4-#
                  </p>
                </li>
                <li>
                  <h5>Delete using click</h5>
                  <p>To delete your speed dialing feature, click the (-) icon.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Edit Speed calling number</h4>
              <h5>Edit using dial</h5>
              <p>
                To edit your speed dialing feature, dial the two-digit code,then dial the
                one-digit number (2 through 9) you would like to edit, Then, dial the
                entire number you wish to designate for that code, followed by #.
                <br />
                For example, to edit Speed Dial 4, simply dial *75-4-123-4567-#
              </p>
              <h5>Edit using click</h5>
              <p>
                To Edit your speed dialing feature, click the edit button, you can change
                the name and the phone number.
              </p>
              <p>
                To Cancel Editing your speed dialing feature, click the cancel button.
              </p>
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <h3>Speed Calling 30 list</h3>
          </summary>
          <ul>
            <li>
              <h4>Add Speed Calling number</h4>
              <p>
                To program your Speed Calling 30 list, dial *75. then dial the two-digit
                number (20 through 49) you would like to use to dial a frequently called
                number. Then, dial the entire number you wish to designate for that code,
                followed by #.
                <br />
                <span className="fs-xxsm fw-500">
                  Remember to dial 1 and the area code for long-distance calls.
                </span>
                <br />
                <br />
                For example, to designate Speed Dial 24 as your friend's number
                555-123-4567 (which is a long-distance call for you), simply dial
                *75-24-1-555-123-4567-#. If the call is local, you would dial
                *75-24-123-4567-#.
              </p>
            </li>
            <li>
              <h4>Use Speed calling number</h4>
              <p>
                To use your speed dialing feature, dial the two-digit code, followed by #.
                Your call will be dialed automatically.
              </p>
            </li>
            <li>
              <h4>Delete Speed calling number</h4>
              <ul>
                <li>
                  <h5>Delete using dial</h5>
                  <p>
                    To delete your speed dialing feature, dial the two-digit code,then
                    dial the two-digit number (20 through 49) you would like to use
                    followed by #.
                    <br />
                    For example, to designate Speed Dial 24, simply dial *75-24-#
                  </p>
                </li>
                <li>
                  <h5>Delete using click</h5>
                  <p>To delete your speed dialing feature, click the (-) icon.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Edit Speed calling number</h4>
              <ul>
                <li>
                  <h5>Edit using dial</h5>
                  <p>
                    To edit your speed dialing feature, dial the two-digit code,then dial
                    the two-digit number (20 through 49) you would like to edit, Then,
                    dial the entire number you wish to designate for that code, followed
                    by #.
                    <br />
                    For example, to edit Speed Dial 24, simply dial *75-24-123-4567-#
                  </p>
                </li>
                <li>
                  <h5>Edit using click</h5>
                  <p>
                    To Edit your speed dialing feature, click the edit button, you can
                    change the name and the phone number.
                  </p>
                  <p>
                    To Cancel Editing your speed dialing feature, click the cancel button.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </details>
      </div>
      <button className="btn--round rotate" onClick={handleclick}>
        ⨉
      </button>
    </article>
  )
}
