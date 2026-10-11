import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "How to Use the Random Name Picker, Spin Wheel, Dice and Lottery",
  description:
    "Learn how to use RandomHub to enter names, spin a customizable wheel, pick a player with name dice, or draw a random lottery winner.",
  alternates: { canonical: "/how-to-use" },
  openGraph: {
    title: "How to Use RandomHub's Name Picker Tools",
    description:
      "A practical guide to the RandomHub name wheel, player dice, and lottery picker.",
    url: "/how-to-use",
    type: "article",
  },
};

export default function HowToUsePage() {
  return (
    <InfoPage
      title="How to Use RandomHub"
      summary="A practical guide to entering names and choosing the right random picker for your group."
    >
      <p>
        RandomHub is a free random name picker with three ways to make a
        selection: a customizable spin wheel, name-assigned dice, and a lottery
        draw. It is designed for everyday choices such as selecting a student,
        choosing a game turn, assigning a presenter, or picking a casual
        giveaway winner. You can use the tools without an account. Start at the
        <Link href="/"> RandomHub name picker</Link>, add your options, and
        choose the method that suits your activity.
      </p>

      <h2>Quick start: make a random pick</h2>
      <ol>
        <li>Open the RandomHub home page and find the names list.</li>
        <li>Enter one name on each line. Remove any names you do not want included.</li>
        <li>Choose Spin wheel, Name dice, or Lottery draw from the tool tabs.</li>
        <li>Use the tool&apos;s main action to spin, roll, or draw a name.</li>
        <li>Read the result displayed on the page. Adjust your list and try again when needed.</li>
      </ol>
      <p>
        At least two names are needed to start a selection. Blank lines are
        ignored, and spaces at the start or end of a line are trimmed. If the
        list needs a quick reset, use Clear below the text box and enter a fresh
        set of names.
      </p>

      <h2>Enter and prepare your name list</h2>
      <p>
        The name list is shared by all three tools. Type each person or option
        on its own line; for example, add Alex, Jordan, Sam, and Taylor as four
        separate entries. A line can contain a first name, a full name, a team
        label, or another short option. The tool treats each non-empty line as
        one entry, so two identical lines count as two chances. Remove
        accidental duplicates if you want every person to have exactly one
        entry.
      </p>
      <p>
        Before drawing, check spelling and confirm that the list contains only
        eligible options. This is especially useful for a classroom roster,
        meeting agenda, or giveaway. RandomHub does not verify identities,
        deduplicate names, or enforce eligibility rules for you. The organizer
        is responsible for reviewing the entries before starting.
      </p>

      <h2>How to use the spin wheel</h2>
      <p>
        Choose <strong>Spin wheel</strong> to turn your list into colored
        segments. Every name becomes a segment, and the wheel selects from the
        names currently in the list. Add at least two entries, then press the
        wheel&apos;s Spin control or the Spin the wheel button. The wheel animates
        and displays the selected name when it stops. Both spin controls start
        the same selection, so use either one, not both at once.
      </p>
      <h3>Set the speed and direction</h3>
      <p>
        The Speed slider changes how long the wheel takes to stop. A shorter
        duration makes a quick classroom or meeting choice; a longer duration
        adds suspense for a group activity. The displayed seconds show the
        selected duration. Use Reverse to switch the direction of rotation. The
        direction changes the animation, not which names are eligible.
      </p>
      <p>
        If your list is long, labels may be shortened visually so they remain
        inside their wheel segments. The full name remains in your list and is
        still eligible to win. For a particularly small group, the wheel has
        more room per segment, making longer labels easier to read. Always use
        the result shown after the animation as the selected name.
      </p>

      <h2>How to use name dice</h2>
      <p>
        Choose <strong>Name dice</strong> when you want a compact roll to decide
        who goes next. Enter at least two names in the shared list and select
        the dice tab. The first six names are assigned to the six displayed die
        faces. If the list contains more than six names, only those first six
        participate in this mode; move or remove entries before rolling if you
        want a different group of players.
      </p>
      <p>
        Select Roll the dice and wait for the animation to finish. The face and
        matching player are shown as the result, and the chosen row is
        highlighted. The dice tool is useful for small groups, turn order, and
        informal classroom participation. It is not a six-sided physical die
        simulation when fewer than six names are entered: the result is chosen
        from the players assigned to the available entries, so each listed
        player can be selected.
      </p>

      <h2>How to draw a lottery winner</h2>
      <p>
        Choose <strong>Lottery draw</strong> to select from the entire name
        list. Add at least two entries and press Draw a winner. The display
        cycles through names briefly before revealing the selection. Use Draw
        another winner to make a new draw from the same list. Names are not
        removed after winning, which means the same person can be selected
        again. To run a draw without repeats, remove each winner from the list
        before drawing again.
      </p>
      <p>
        Each line is an entry, not necessarily a unique person. If someone has
        three entries and another person has one, the first person has three
        chances in the draw. This can be useful when entries represent tickets
        or points. For a one-person-one-chance giveaway, include each eligible
        person once. Review the list and your giveaway rules before drawing so
        everyone understands how entries are counted.
      </p>

      <h2>Which random picker should you choose?</h2>
      <ul>
        <li><strong>Spin wheel:</strong> choose it when the group should see an animated selection and you want speed or direction controls.</li>
        <li><strong>Name dice:</strong> choose it for a quick turn among up to six listed players.</li>
        <li><strong>Lottery draw:</strong> choose it to draw from the full list, including lists with more than six entries.</li>
      </ul>
      <p>
        All three modes use the same list, so changing tools does not require
        entering names again. Choose based on the size of your group and how you
        want the result presented. For example, dice are convenient for a small
        board-game group, while the wheel makes a visible classroom pick and a
        lottery draw is straightforward for a longer list.
      </p>

      <h2>Fairness, repeated draws, and important limits</h2>
      <p>
        RandomHub is intended for casual decisions and activities. The tools
        make an in-browser random selection, but they are not certified,
        independently audited, or cryptographic random drawing systems. Do not
        rely on them for regulated lotteries, gambling, financial decisions,
        legal decisions, or situations that require a verifiable or tamper-proof
        result. For a formal contest, publish clear rules and use a selection
        process appropriate to the applicable requirements.
      </p>
      <p>
        To make a selection transparent in a group, show the entries before
        starting and agree on the rules first. Decide whether duplicate names
        represent extra chances, whether a previous winner can win again, and
        how many selections will be made. Randomness can choose from a list; it
        cannot decide who is eligible or interpret contest rules.
      </p>

      <h2>Privacy and troubleshooting</h2>
      <p>
        Names are held in the open page while you use the tool and are not
        uploaded to a RandomHub server. Reloading or leaving the page clears
        the list, so keep your own copy if you need it later. The spin count,
        when used, is stored locally in that browser and is not a public,
        site-wide total. Avoid entering sensitive personal information; names
        should be limited to what is needed for your activity. More details are
        available in the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
      <p>
        If a spin or draw control is disabled, check that at least two
        non-empty names are in the list. If an expected player is missing from
        Name dice, check whether they are beyond the first six entries. If a
        lottery result repeats, remember that winners remain in the list until
        you remove them. If a name is hard to read on the wheel, use the result
        display after the wheel stops or shorten the name for presentation.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Can I use RandomHub without signing up?</h3>
      <p>Yes. The random picker tools work without an account or registration.</p>
      <h3>Does the list stay after I close or refresh the page?</h3>
      <p>No. Names are kept in the open page and are cleared when you reload or leave it.</p>
      <h3>Can the same name appear more than once?</h3>
      <p>Yes. Each non-empty line is a separate entry, so duplicate lines create extra chances.</p>
      <h3>Does the lottery draw remove a winner?</h3>
      <p>No. Remove a previous winner yourself if you want later draws to exclude them.</p>
      <h3>Can I use the result for an official or regulated contest?</h3>
      <p>RandomHub is for casual use and does not provide an audited or certified drawing process.</p>

      <p>
        Ready to make a selection? Return to the <Link href="/">free random
        name picker</Link>, enter your options, and choose the wheel, dice, or
        lottery tool that fits your activity.
      </p>
    </InfoPage>
  );
}