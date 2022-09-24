import {h} from 'preact'
import {render} from '@testing-library/preact'
import Reaction from "./Reaction";

it('displays', function() {

    const { container } = render(<Reaction
        reaction={{
            type: "wow",
            is_shown: true,
            image_url: null,
            text: 'wow'
        }}
        hasReacted={false}
        count={10}
        onClick={(_) => null}
        displayType="both"
    />
    );

    expect(container.querySelector('.reaction')?.className).not.toContain(' reacted');
    expect(container.querySelector(".reaction-number")?.textContent).toBe('10');

    const img = container.querySelector('img')
    expect(img).toBeInstanceOf(HTMLImageElement);
    expect(img?.src).toContain('/res/reactions/wow.svg'); // default image

    expect(container.querySelector('.reaction-text')?.textContent).toBe('wow');

});

it('adds reacted class and displays only image with custom URL', function() {

    const img = 'https://example.image.png';
    const { container } = render(<Reaction
            reaction={{
                type: "wow",
                is_shown: true,
                image_url: img,
                text: 'wow'
            }}
            hasReacted={true}
            count={10}
            onClick={(_) => null}
            displayType="image"
        />
    );

    expect(container.querySelector('.reaction')?.className).toContain(' reacted');
    expect(container.querySelector('.reaction-text')).toBeNull();
    expect(container.querySelector('img')?.src).toBe(img);

});

it('displays only text', function() {

    const { container } = render(<Reaction
            reaction={{
                type: "wow",
                is_shown: true,
                image_url: null,
                text: 'wow'
            }}
            hasReacted={true}
            count={10}
            onClick={(_) => null}
            displayType="text"
        />
    );

    expect(container.querySelector('.reaction-text')).not.toBeNull();
    expect(container.querySelector('img')).toBeNull();

});